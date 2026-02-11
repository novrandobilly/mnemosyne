import { IntiDinamisText } from "../../components/IntiDinamisText";
import MainWrapper from "../../components/MainWrapper";

export default function HomePage() {
  return (
    <MainWrapper>
      {/* Main Content */}
      <main className="flex flex-col flex-1 px-6 mt-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center text-gray-500">
            <IntiDinamisText size="24">Homepage Content</IntiDinamisText>
          </div>
        </div>
      </main>
    </MainWrapper>
  );
}
