import Head from 'next/head';

export default function Post(props) {
  return (
    <div>
      <Head>
        <h1 class = "tituloPrincipal">{props.id}</h1>
        <link rel = 'stylesheet' href = 'https://bootswatch.com/4/minty/bootstrap.min.css'></link>
      </Head>
      <div class="alert alert-dismissible alert-secondary">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Well done! </strong> 
          <a>You built a new page.</a>
      </div>
    </div>
  )
}

export async function getStaticProps({ params: { id } }) {
  return { props: { id } }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'about' } },
      { params: { id: 'post' } },
      { params: { id: 'lifestyle' } },
      { params: { id: 'contact' } },
    ],
    fallback: true,
  }
}
