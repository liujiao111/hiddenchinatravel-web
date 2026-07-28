type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="mr-4 h-12 w-12 rounded-sm object-cover"
        alt={name}
      />
      <div className="text-lg font-light tracking-wide text-[var(--brand-ink)]">
        {name}
      </div>
    </div>
  );
};

export default Avatar;
