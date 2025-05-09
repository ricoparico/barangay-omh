import { getHotlines } from "@/db/hotline/hotline";
import { Hotline } from "@/types";
import HotlineItem from "./HotlineItem";

async function Hotlines() {
  const hotlines = JSON.parse(JSON.stringify(await getHotlines()));

  return (
    <div className="border border-destructive rounded-md mb-4">
      <h1 className="text-3xl font-bold text-center bg-destructive text-background py-2">
        Hotlines
      </h1>
      {hotlines && hotlines.length < 1 && (
        <p className="text-center py-4 font-semibold">-NO HOTLINES-</p>
      )}
      <div>
        {hotlines.map((hotline: Hotline) => {
          return <HotlineItem hotline={hotline} key={hotline._id} />;
        })}
      </div>
      <a
        href="/hotlines"
        target="_blank"
        className="p-2 hover:bg-destructive hover:text-background block text-center font-bold"
      >
        View in new tab
      </a>
    </div>
  );
}

export default Hotlines;
