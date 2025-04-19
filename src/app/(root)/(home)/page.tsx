"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import HeroSection from "@/components/Hero";

export default function Home() {
  const router = useRouter();

  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();
  const {name} = useUserRole();
  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Meet":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    
    <div className="container max-w-7xl mx-auto p-6">
      {/* WELCOME SECTION */}
      <HeroSection/>
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
  Welcome back {name}!
</h1>

        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews and review candidates effectively"
            : "Access your upcoming interviews and preparations"}
        </p>
      </div>
    
      {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />
          
        </>
      ) : (
        <>
  {/* Header Section */}
  <div className="text-center md:text-left">
    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
      Your Interviews
    </h1>
    <p className="text-lg text-muted-foreground mt-2">
      View and join your scheduled interviews
    </p>
  </div>

  {/* Interview List Section */}
  <div className="mt-10">
    {interviews === undefined ? (
      // Loader when interviews are loading
      <div className="flex justify-center items-center py-16">
        <Loader2Icon className="h-10 w-10 animate-spin text-muted-foreground" />
      </div>
    ) : interviews.length > 0 ? (
      // Grid layout for interview cards
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {interviews.map((interview) => (
          <MeetingCard key={interview._id} interview={interview} />
        ))}
      </div>
    ) : (
      // Message when no interviews are found
      <div className="flex flex-col items-center justify-center text-center py-16">
        <p className="text-lg text-muted-foreground">
          🚀 You have no scheduled interviews at the moment
        </p>
      </div>
    )}
  </div>
</>

      )}
    </div>
    
  );
}
