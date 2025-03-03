import {
    StreamVideo,
    StreamCall,
    StreamVideoClient,
  } from "@stream-io/video-react-sdk";
import { CustomLivestreamPlayer } from "./CustomLivestreamPlayer";

const apiKey = "qdwetuy7dgb6";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTc0MDkyNDY4MSwiZXhwIjoxNzQxMDExMDgxLCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV81YzVhZjgxOC03OTAxLTRkNTQtODU5ZC1mMjRiNWI0YjUyYmEiXX0.JPdishh4drYY11WNkC8JZNG0g-NG5TzTNLRPYWwmAq8";
const callId = "livestream_5c5af818-7901-4d54-859d-f24b5b4b52ba";

const user = { type: "anonymous" };
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("livestream", callId);


const LiveStream = () => {
  return (
    <StreamVideo client={client}>
      <CustomLivestreamPlayer callType="livestream" callId={callId} />
    </StreamVideo>
  )
}

export default LiveStream