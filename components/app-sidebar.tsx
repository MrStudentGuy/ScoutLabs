import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/mode-toggle";
import HotkeysView from "@/components/hotkeys-view";

export function AppSidebar() {

    return (
        <Sidebar>
            <SidebarHeader>
                <div className={"flex flex-row justify-evenly items-center"}>
                    <h1 className={"text-4xl text-center"}>ScoutLabs</h1>

                    <ModeToggle/>
                </div>


            </SidebarHeader>
            <SidebarContent>
            <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <SignedIn>
                    <div className={"flex flex-row justify-evenly items-center"}>
                        <UserButton/>

                        <HotkeysView />
                    </div>
                </SignedIn>

                <SignedOut>
                    <SignInButton/>
                </SignedOut>
            </SidebarFooter>
        </Sidebar>
    )
}
