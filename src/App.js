import i18n from "i18next";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('welcome')}</h2>
      <select onChange={(item)=>i18n.changeLanguage(item.target.value)}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </div>
    )
}

export default App;
