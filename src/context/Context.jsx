import React, { useState } from 'react';
import MensajeIngles from './../language/en.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    // Mặc định luôn dùng tiếng Anh
    const [mensaje, setMensaje] = useState(MensajeIngles);
    const [locale, setLocale] = useState('en-US');

    // Giữ hàm để tránh lỗi nếu có component con gọi đến
    const selectLanguage = () => {
        setMensaje(MensajeIngles);
        setLocale('en-US');
        localStorage.setItem('lang', 'en-US');
    };

    return (
        <langContext.Provider value={{ selectLanguage: selectLanguage }}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export { LangProvider, langContext };