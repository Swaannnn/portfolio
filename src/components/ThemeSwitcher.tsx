import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            {theme === "dark" ? (
                <button onClick={() => setTheme("light")}>
                    <SunIcon color="#fff" size={24} />
                </button>
            ) : (
                <button onClick={() => setTheme("dark")}>
                    <MoonIcon color="#000" size={24} />
                </button>
            )}
        </div>
    );
}

{/*{language === "fr" ? (*/}
{/*    <button onClick={() => setLanguage("en")}>*/}
{/*        <Image src="images/flag_uk.svg" alt="sun" width={24} height={24}/>*/}
{/*    </button>*/}
{/*    ) : (*/}
{/*    <button onClick={() => setLanguage("fr")}>*/}
{/*        <Image src="images/flag_fr.svg" alt="sun" width={24} height={24}/>*/}
{/*    </button>*/}
{/*)}*/}
