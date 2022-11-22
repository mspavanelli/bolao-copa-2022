import { NextApiRequest, NextApiResponse } from "next";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Match } from "@/utils/types/Match";
import { MatchStatus } from "@/utils/enums/MatchStatus";

const matchesCollection = collection(db, "matches");

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  switch (method) {
    case "GET":
      getAll(request, response);
      break;
    case "POST":
      add(request, response);
      break;
  }
}

async function getAll(request: NextApiRequest, response: NextApiResponse) {
  const firebase_response = await getDocs(matchesCollection);
  const { docs } = firebase_response;

  const matchesFromDocs = docs.map((doc) => {
    const { id } = doc;
    const {
      first_team,
      first_team_score,
      second_team,
      second_team_score,
      weight,
      date: rawDate,
    } = doc.data();

    const date = new Date(rawDate.seconds * 1000);

    const status = MatchStatus.OPEN;

    return {
      id,
      date,
      first_team,
      first_team_score,
      second_team,
      second_team_score,
      weight,
      status,
    };
  });

  const orderedMatches = matchesFromDocs.sort(
    (firstMatch, secondMatch) =>
      firstMatch.date.getTime() - secondMatch.date.getTime()
  );

  return response.status(200).send({ matches: orderedMatches });
}

function add(request: NextApiRequest, response: NextApiResponse) {
  const match = request.body.match as Match;

  const { date, first_team, second_team } = match;

  try {
    const firebase_response = addDoc(matchesCollection, {
      date: new Date(date),
      first_team,
      first_team_score: "0",
      second_team,
      second_team_score: "0",
      weight: 1,
    });
    return response.status(201).send({ match });
  } catch (err) {
    return response.status(400).send({ err });
  }
}
