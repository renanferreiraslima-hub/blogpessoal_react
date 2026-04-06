import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

    const ano = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">

                    <p className="text-xl font-bold">
                        Blog Pessoal Renan Lima | Copyright: {ano}
                    </p>

                    <p className="text-lg">
                        Acesse minhas redes sociais
                    </p>

                    <div className="flex gap-2 mt-2">

                        <a 
                            href="https://www.linkedin.com/in/renanferreiralima" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <LinkedinLogoIcon size={48} weight="bold" />
                        </a>

                        <a 
                            href="https://www.instagram.com/renan_ferreira" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <InstagramLogoIcon size={48} weight="bold" />
                        </a>


                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;