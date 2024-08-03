import { AdminHeader } from "./admin-header";
import { OtherInformationCard } from "./other-information-card";
import { PlaySchoolInformationCard } from "./playschool-information-card";
import { StaffCard } from "./staff-card";

export const AdminProfile = () => {
  return (
    <div className="min-h-[screen] min-w-[screen]">
      <div className="flex flex-col">
        <AdminHeader />
        <div className="mx-64 my-8 space-y-16">
          <div className="flex space-x-16">
            <PlaySchoolInformationCard />
            <OtherInformationCard />
          </div>
          <StaffCard />
        </div>
      </div>
    </div>
  );
};
