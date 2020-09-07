import Link from "next/link";
import Head from 'next/head';



export default function Home() {
  return (  
    <Head>
      <link rel = 'stylesheet' href = 'https://bootswatch.com/4/minty/bootstrap.min.css'></link>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Blog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">  
          <ol class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link href="/blog?id=about" as="/blog/about">
                <a class="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item active">
              <Link href="/blog?id=post" as="/blog/post">
                <a class="nav-link">Post</a>
              </Link>
            </li>
            <li class="nav-item active">
              <Link href="/blog?id=lifestyle" as="/blog/lifestyle">
                <a class="nav-link">Lifestyle</a>
              </Link>
            </li>
            <li class="nav-item active">
              <Link href="/blog?id=contact" as="/blog/contact">
                <a class="nav-link">Contact</a>
              </Link>
            </li>
          </ol>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>  
        </div>
      </nav>
    </Head>
  );
}


