export default ({ onClick, activeTheme }) => (
    <div onClick={onClick} className={`toggle ${activeTheme}`}>
      <span className={`light ${activeTheme === 'light' ? 'visible' : ''}`}>DARK</span>
      <span className={`dark ${activeTheme === 'dark' ? 'visible' : ''}`}>LIGHT</span>
      <div className="button"/>
    <style jsx>
      {`
        .toggle {
          position: absolute;
          cursor: pointer;
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          line-height: 12px;
          font-size: 12px;
          margin-top: 55px;
          margin-left: 685px;
        }

        .button {
          margin: 0;
          padding: 0;
          outline: 0;
          cursor: pointer;
          border: 1px solid black;
          background-color: transparent;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .toggle.dark .button {
          border-color: white;
          background-color: white;
        }

        span {
          padding-right: 20px;
          user-select: none;
          position: absolute;
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

        @media (max-width: 1200px) {
          .toggle {
            top: 0px;
            right: 20px;
          }
        }
      `}
    </style>
  </div>
)
