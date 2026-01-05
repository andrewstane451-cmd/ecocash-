import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

const LoanResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSuccess = location.state?.success ?? true;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {isSuccess ? (
        <>
          <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Approved
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Your StarLink offer has been successfully received. <br/>You will receive within an hour.🎉
          </p>
        </>
      ) : (
        <>
          <XCircle className="w-24 h-24 text-red-500 mb-6" />
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Error
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Please use your primary number.
          </p>
        </>
      )}

      <button
        onClick={() => navigate("/")}
        className="w-full max-w-xs py-4 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default LoanResult;
