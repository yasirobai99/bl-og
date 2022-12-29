import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
"--my-black": "#1a1a1a",
"--my-Colour": "#073042",
"--my-brand": "#00de7a",
"--my-red": "#db4437",
"--my-yellow": "#f4b400",
"--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({

    "--black": props["--my-Colour"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#555",

    "--component-bg": props["--my-Colour"],
    "--component-text-color": props["--my-white"],

    "--brand-primary": props["--my-brand"],

    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-red"],
    "--default-button-danger-color": props["--my-red"],

    "--state-info-color": props["--my-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    "--main-navigation-color": props["--my-Colour"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--my-brand"],
});