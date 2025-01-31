import Input from "@/components/form/input";
import InputGroup from "@/components/form/input-group";
import InputPassword from "@/components/form/input-password";
import Button from "@/components/general/button";
import DefaultLink from "@/components/general/default-link";
import Paragraph from "@/components/general/paragraph";

export default function SignupPage() {
  return (
    <>
      <form className="space-y-4" action="#" method="POST">
        <InputGroup htmlFor="email" label="E-mail address">
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="contoh: leegro@gmail.com"
          />
        </InputGroup>
        <InputGroup htmlFor="name" label="Nama">
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Nama Anda"
          />
        </InputGroup>
        <InputGroup htmlFor="password" label="Password">
          <InputPassword
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password Anda"
          />
        </InputGroup>
        <InputGroup htmlFor="password_confirmation" label="Konfirmasi Password">
          <InputPassword
            name="password_confirmation"
            id="password_confirmation"
            autoComplete="current-password-confirmation"
            placeholder="Konfirmasi Password"
          />
        </InputGroup>
        <InputGroup htmlFor="phone" label="Nomer HP">
          <div className="flex flex-row space-x-2">
            <div className="basis-3/4">
              <Input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                placeholder="contoh: 085123******"
              />
            </div>
            <div className="basis-1/4 flex items-center justify-center">
              <Button type="button" variant="primary" size="small" block>
                Kirim OTP
              </Button>
            </div>
          </div>
        </InputGroup>
        <InputGroup htmlFor="otp" label="Kode OTP">
          <Input
            type="text"
            name="otp"
            id="otp"
            autoComplete="otp"
            placeholder="Kode OTP"
            readOnly
          />
        </InputGroup>

        <div>
          <Button type="submit" variant="primary" block disabled>
            Daftar
          </Button>
        </div>
      </form>

      <Paragraph className="text-center mt-5">
        Sudah punya akun? &nbsp;
        <DefaultLink href="/login">Login</DefaultLink>
      </Paragraph>
    </>
  );
}
