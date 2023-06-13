import React from "react";
import { useRouter } from "next/router";

// import { useCustomApi } from "@/saleor/customApi";
import usePaths from "@/lib/paths";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { useAddHealthDataMutation } from "@/saleor/phiApi";
import { usePhiApolloClient } from "@/lib/auth";

export interface PHIFormData {
  allergies: boolean;
  healthCondition: boolean;
  takingMedication: boolean;
}

function PHIPage() {
  const router = useRouter();
  const paths = usePaths();
  const t = useIntl();
  const { apolloClient } = usePhiApolloClient();
  const [createPhi] = useAddHealthDataMutation({ client: apolloClient });
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = useForm<PHIFormData>({});
  // const { postClient } = useCustomApi();

  const handleRegister = handleSubmitForm(async (formData: PHIFormData) => {
    try {
      const email = JSON.parse(localStorage.getItem("currentUser")!);
      if (!email) {
        void router.push(paths.$url());
      }
      // await postClient("health-data", { ...formData, email });
      const { allergies, healthCondition, takingMedication } = formData;
      const { data, errors } = await createPhi({
        variables: {
          allergies: !!allergies,
          healthCondition: !!healthCondition,
          takingMedication: !!takingMedication,
          email,
        },
      });

      if (errors?.length) {
        errors.forEach((error) => alert(error?.message));
        return;
      }

      localStorage.removeItem("healthData");
      localStorage.removeItem("currentUser");
    } catch (err: any) {
      console.error("Error:", err);
      return;
    }

    // User signed in successfully.
    void router.push(paths.$url());
  });

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-100 to-blue-500">
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <form method="post" onSubmit={handleRegister}>
              <div>
                <h1 className="text-2xl font-bold">Health Data</h1>
              </div>

              <div className="my-3">
                <input
                  className="px-4 border-2 py-2 rounded-md text-sm outline-none"
                  type="checkbox"
                  id="allergies"
                  spellCheck={false}
                  style={{ opacity: 1, position: "relative" }}
                  {...registerForm("allergies", {})}
                />
                <label htmlFor="allergies" className="text-md ml-2 mb-2">
                  Do you have any allergies?
                </label>
                {!!errorsForm.allergies && (
                  <p className="text-sm text-red-500 pt-2">{errorsForm.allergies?.message}</p>
                )}
              </div>
              <div className="my-3">
                <input
                  className="px-4 border-2 py-2 rounded-md text-sm outline-none"
                  type="checkbox"
                  id="healthCondition"
                  spellCheck={false}
                  style={{ opacity: 1, position: "relative" }}
                  {...registerForm("healthCondition", {})}
                />
                <label htmlFor="healthCondition" className="text-md ml-2 mb-2">
                  Do you have any health condition?
                </label>
                {!!errorsForm.healthCondition && (
                  <p className="text-sm text-red-500 pt-2">{errorsForm.healthCondition?.message}</p>
                )}
              </div>
              <div className="mt-5">
                <input
                  className="px-4 border-2 py-2 rounded-md text-sm outline-none"
                  type="checkbox"
                  id="takingMedication"
                  spellCheck={false}
                  style={{ opacity: 1, position: "relative" }}
                  {...registerForm("takingMedication", {})}
                />
                <label htmlFor="takingMedication" className="text-md ml-2 mb-2">
                  Are you taking any medications, vitamins or supplements?
                </label>
                {!!errorsForm.takingMedication && (
                  <p className="text-sm text-red-500 pt-2">
                    {errorsForm.takingMedication?.message}
                  </p>
                )}
              </div>

              <div className="">
                <button
                  type="submit"
                  className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PHIPage;
