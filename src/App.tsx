import { CookieConsent } from "./reactCookieConsent";

const Main = () => {
  const CookieInfoContent = () => (
    <>
      <h3>This site uses Cookies</h3>
      <p>
        To improve the performance and user experience, this site uses cookies
        and shares user data with third-party services.
      </p>
      <p>
        To improve the performance and user experience, this site uses cookies
        and shares user data with third-party services.
      </p>
      <p>
        To improve the performance and user experience, this site uses cookies
        and shares user data with third-party services.
      </p>
    </>
  );

  return (
    <main>
      <CookieConsent
        enableManagement={true}
        infoContent={<CookieInfoContent />}
        type="modal"
      />
    </main>
  );
};

export default Main;
