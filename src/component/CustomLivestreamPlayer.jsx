import { useEffect, useState } from "react";
import {
  ParticipantView,
  StreamCall,
  useCallStateHooks,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";

export const CustomLivestreamPlayer = ({ callType, callId }) => {
  const client = useStreamVideoClient();
  const [call, setCall] = useState();

  useEffect(() => {
    if (!client) return;
    const myCall = client.call(callType, callId);
    setCall(myCall);
    myCall.join().catch((e) => {
      console.error("Failed to join call", e);
    });

    return () => {
      myCall.leave().catch((e) => {
        console.error("Failed to leave call", e);
      });
      setCall(undefined);
    };
  }, [client, callId, callType]);

  if (!call) return null;
  return (
    <StreamCall call={call}>
      <CustomLivestreamLayout />
    </StreamCall>
  );
};

const CustomLivestreamLayout = () => {
  const { useParticipants, useParticipantCount } = useCallStateHooks();
  const participantCount = useParticipantCount();
  const [firstParticipant] = useParticipants();

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white rounded-lg shadow-lg w-[100%]">
      <div className="text-lg font-semibold mb-2">Live Viewers: {participantCount}</div>
      <div className="w-full h-[80vh] flex items-center justify-center bg-gray-800 rounded-lg">
        {firstParticipant ? (
          <ParticipantView participant={firstParticipant} className="h-[70vh] rounded-lg" />
        ) : (
          <div className="text-gray-400 text-center">The host hasn't joined yet</div>
        )}
      </div>
    </div>
  );
};