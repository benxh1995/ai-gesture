import Link from "next/link";
// import ModeToggle from "./themeMode";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const Header = () => {
    return (<div>
        <header className='flex justify-between items-center py-4 px-8'>
            <div>
                <Link href="/">
                    🤌
                </Link>
            </div>
            <nav className="flex items-center justify-between">
                <Link href="/ranking">
                    <Button variant="link">
                        Ranking
                    </Button>
                </Link>
                <Link href="/add-prompt">
                    <Button variant="link">
                        Add Prompt
                    </Button>
                </Link>
                <Link href="/results">
                    <Button variant="link">
                        Results
                    </Button>
                </Link>
                {/* <ModeToggle /> */}
            </nav>
        </header>
        <Separator />
    </div>
    )
}

export default Header;