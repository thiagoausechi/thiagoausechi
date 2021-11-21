import Head from 'next/head'

export default function Home()
{
  return (
    <div>
      <Head>
        <title>Thiago Ausechi</title>
      </Head>
      <main>
        <div style={
          {
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <h2>
            Work in Progress
          </h2>
        </div>
      </main>
    </div >
  )
}
