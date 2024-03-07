import Input from "./Input";

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input labelText="initial investment" />
        <Input labelText="annual investment" />
      </div>
      <div className="input-group">
        <Input labelText="expected return" />
        <Input labelText="duration" />
      </div>
    </section>
  );
}
