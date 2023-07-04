/**
 * Utilitário para criação de classNames condicionais, usando frameworks como TailwindCSS.
 *
 * Exemplo: secondary ? 'bg-red-500' : 'bg-blue-500'
 * @returns Um array de string concatenadas.
 */
export const classNames = (...classes: string[]) =>
    classes.filter(Boolean).join(' ');

export const scrollWindowToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};