import IntiDinamisButton from "@/components/IntiDinamisButton";

interface EAS7StartButtonProps {
  onClick: () => void;
}

export const EAS7StartButton = ({ onClick }: EAS7StartButtonProps) => {
  return (
    <div className="flex flex-col items-center pt-2">
      <IntiDinamisButton
        variant="primary"
        className="w-full sm:w-64 py-3 text-sm font-semibold rounded-full shadow-md cursor-pointer"
        onClick={onClick}
      >
        Mulai Tes
      </IntiDinamisButton>
    </div>
  );
};
