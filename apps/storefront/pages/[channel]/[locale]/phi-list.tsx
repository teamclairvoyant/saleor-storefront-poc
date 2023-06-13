import { Box, Layout } from "@/components";
import { phiApolloClient, usePhiApolloClient } from "@/lib/auth";
import { GetPhiDocument, GetPhiQuery, GetPhiQueryVariables, useGetPhiQuery } from "@/saleor/phiApi";
import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";

export const getStaticProps = async () => {
  const phiResult: ApolloQueryResult<GetPhiQuery> = await phiApolloClient.query<
    GetPhiQuery,
    GetPhiQueryVariables
  >({
    query: GetPhiDocument,
  });

  return {
    props: {
      phiResult: phiResult?.data,
    },
    revalidate: 60 * 60, // value in seconds, how often ISR will trigger on the server
  };
};

function PhiList({ phiResult }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { apolloClient } = usePhiApolloClient();
  const { data, loading, error } = useGetPhiQuery({ client: apolloClient });

  return (
    <div className="container">
      <header className="mb-4">
        <Box>
          <div className="container">
            <h1 className="text-5xl font-bold mb-4">Recorded health data</h1>
          </div>
        </Box>
      </header>
      <main>
        <ul className="py-4">
          {phiResult?.getPhi?.map((phi) => (
            <li key={phi?.id} className="text-2xl border p-2">
              <div className="text-3xl">{phi?.email}</div>
              <div>
                Allergies: {phi?.allergies?.toString()} | Health Conditions:{" "}
                {phi?.healthCondition?.toString()} | Medications:{" "}
                {phi?.takingMedication?.toString()}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default PhiList;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

PhiList.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
