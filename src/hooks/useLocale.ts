import * as translationEN from '../i18n/en.json';

type ResourcesType = {
    en: {
        [key: string]: string;
    }
}
const useLocale = () => {
    const localeResources: ResourcesType = {
        en: translationEN
    }

    const translate = (key: string): string => {
        return localeResources.en[key] || key;
    }

    return {
        translate
    }
}

export default useLocale;