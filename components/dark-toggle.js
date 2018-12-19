export default ({ onClick, activeTheme }) => (
  <div className={`toggle ${activeTheme}`}>
    <span className={`light ${activeTheme === 'light' ? 'visible' : ''}`}>DARK</span>
    <span className={`dark ${activeTheme === 'dark' ? 'visible' : ''}`}>LIGHT</span>
    <button onClick={onClick} />
    <style jsx>
      {`
        .toggle {
          position: fixed;
          margin-top: 50px;
          width: 100%;
          max-width: 1000px;
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          line-height: 12px;
          font-size: 12px;
        }

        button {
          margin: 0;
          padding: 0;
          outline: 0;
          cursor: pointer;
          border: 1px solid black;
          background-color: transparent;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          margin-left: 10px;
          transition: all 0.2s ease;
        }

        .toggle.dark button {
          border-color: white;
          background-color: white;
        }

        span {
          position: absolute;
          right: 20px;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        span.dark {
          transform: translateY(5px);
        }
        span.light {
          transform: translateY(-5px);
        }

        span.visible {
          transform: translateY(0px);
          opacity: 1;
        }
      `}
    </style>
  </div>
)