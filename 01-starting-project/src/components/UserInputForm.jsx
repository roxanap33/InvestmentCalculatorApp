import Input from "./Input";

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <Input labelText="initial investment" />
          <Input labelText="expected return" />
        </div>
        <div>
          <Input labelText="annual investment" />
          <Input labelText="duration" />
        </div>
      </div>
    </section>
  );
}
