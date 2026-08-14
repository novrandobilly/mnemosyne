import IntiDinamisButton from "@/components/IntiDinamisButton";

interface DrStartButtonProps {
  onClick: () => void;
}

export const DrStartButton = ({ onClick }: DrStartButtonProps) => {
  return (
    <div className="flex flex-col items-center pt-2">
      <IntiDinamisButton
        variant="primary"
        className="w-full sm:w-64 py-3 text-sm font-semibold rounded-full shadow-md"
        onClick={onClick}
      >
        Mulai Tes
      </IntiDinamisButton>
    </div>
  );
};
