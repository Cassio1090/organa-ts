import "./Rodape.css";

const Rodape = () => {
  return (    
    <footer className="footer">                
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="imagens/fb.png" alt="logo do facebook"></img>
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="imagens/tw.png" alt="logo do twitter/x"></img>
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="imagens/ig.png" alt="logo do instagram"></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="imagens/logo.png" alt="logo da organo"></img>
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>      
    </footer>
  );
};

export default Rodape;
