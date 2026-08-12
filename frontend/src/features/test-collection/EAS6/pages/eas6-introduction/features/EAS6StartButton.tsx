import IntiDinamisButton from "@/components/IntiDinamisButton";

interface EAS6StartButtonProps {
  onClick: () => void;
}

export const EAS6StartButton = ({ onClick }: EAS6StartButtonProps) => {
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
