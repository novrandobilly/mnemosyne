import AdminWrapper from "@/components/MainWrapper/features/admin-wrapper";
import { Eas7Provider } from "./context/Eas7Context";
import { EAS7Header } from "./features/EAS7Header";
import { EAS7TimeUpBanner } from "./features/EAS7TimeUpBanner";
import { EAS7GroupNav } from "./features/EAS7GroupNav";
import { EAS7Premises } from "./features/EAS7Premises";
import { EAS7QuestionList } from "./features/EAS7QuestionList";

export const Eas7Test = () => (
  <AdminWrapper pageTitle="EAS7">
    <Eas7Provider>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <EAS7Header />
        <EAS7TimeUpBanner />
        <EAS7GroupNav />
        <EAS7Premises />
        <EAS7QuestionList />
      </div>
    </Eas7Provider>
  </AdminWrapper>
);
