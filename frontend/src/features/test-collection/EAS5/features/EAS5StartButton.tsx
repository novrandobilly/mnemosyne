import IntiDinamisButton from "@/components/IntiDinamisButton";

interface EAS5StartButtonProps {
  onClick: () => void;
}

export const EAS5StartButton = ({ onClick }: EAS5StartButtonProps) => {
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
