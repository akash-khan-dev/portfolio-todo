import profile from "../assets/WhatsApp Image 2024-02-09 at 16.28.45_e7cb9f82.jpg";
const ProfileShow = () => {
  return (
    <>
      <div className="absolute top-16 left-16">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={profile}
            alt="profile"
          />
        </div>
        <div>
          <h5 className="font-semibold text-lg text-[#444444] mt-2">
            Md Akash Khan
          </h5>
        </div>
      </div>
    </>
  );
};

export default ProfileShow;
