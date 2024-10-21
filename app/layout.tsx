import './globals.css'
import {SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import {AppSidebar} from "@/components/app-sidebar";
import {ClerkProvider} from "@clerk/nextjs";
import { ThemeProvider } from '@/components/theme-provider';
import {TooltipProvider} from "@/components/ui/tooltip";
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <TooltipProvider>
                <html lang="en">
                <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SidebarProvider>
                        <AppSidebar/>
                        <main>
                            <div className={"flex flex-row justify-start items-center space-x-2 ml-2 mt-1"}>
                                <SidebarTrigger/>
                            </div>
                            {children}
                        </main>
                    </SidebarProvider>
                </ThemeProvider>
                </body>
                </html>
            </TooltipProvider>
        </ClerkProvider>
    )
}