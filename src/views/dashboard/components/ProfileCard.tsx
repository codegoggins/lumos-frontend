import avatarImg from "../../../assets/images/avatars/m1.jpg";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col items-center gap-3">
      <div className="rounded-full p-2 border-3 border-primary">
        <img
          src={avatarImg}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <p className="text-sm font-semibold text-text-primary">Explorer</p>
    </div>
  );
};

export default ProfileCard;
