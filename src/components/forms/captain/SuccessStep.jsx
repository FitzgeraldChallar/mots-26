import { CheckCircle2, Copy, Share2 } from "lucide-react";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

export default function SuccessStep({
  captain,
  onRegisterAnother,
}) {
  const copyCode = async () => {
    await navigator.clipboard.writeText(captain.captain_code);
    toast.success("Captain code copied!");
  };

  const shareWhatsApp = () => {
    const message =
      `I just registered as a Captain for Move of the Spirit 2026.%0A%0A` +
      `My Captain Code is: ${captain.captain_code}%0A%0A` +
      `Use this code when registering for the event.`;

    window.open(
      `https://wa.me/?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="text-center py-8">

      <CheckCircle2
        className="mx-auto text-green-600"
        size={80}
      />

      <h2 className="text-4xl font-bold mt-6">
        Registration Successful!
      </h2>

      <p className="text-gray-600 mt-3">
        Your Captain Code is ready.
      </p>

      <div className="bg-purple-50 rounded-2xl p-8 mt-8">

        <p className="text-gray-500">
          Captain Code
        </p>

        <h1 className="text-5xl font-black tracking-widest text-purple-900 mt-2">
          {captain.captain_code}
        </h1>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <Button onClick={copyCode}>
          <Copy size={18}/>
          Copy Code
        </Button>

        <Button
          variant="secondary"
          onClick={shareWhatsApp}
        >
          <Share2 size={18}/>
          WhatsApp
        </Button>

      </div>

      <div className="mt-10">

        <Button
          variant="outline"
          onClick={onRegisterAnother}
        >
          Register Another Captain
        </Button>

      </div>

    </div>
  );
}