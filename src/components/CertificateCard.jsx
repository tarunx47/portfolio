import { ExternalLink } from "lucide-react";

export function CertificateCard({ ach, onClick }) {
    const Icon = ach.icon;

    return (
        <button
            type="button"
            onClick={onClick}
            className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row"
        >
            <span className="flex flex-col justify-between p-6 sm:w-3/5">
                <span className="flex flex-col gap-4">
                    <span className={`w-fit rounded-md bg-muted p-3 ${ach.color}`}><Icon className="h-6 w-6" /></span>
                    <span>
                        <span className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-mono">{ach.year}</span>
                            <span aria-hidden="true">·</span>
                            <span className="line-clamp-1">{ach.organization}</span>
                        </span>
                        <span className="line-clamp-2 text-xl font-bold text-foreground">{ach.title}</span>
                    </span>
                    <span className="line-clamp-2 text-sm text-muted-foreground">{ach.description}</span>
                </span>
                <span className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground">
                    View certificate <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
            </span>
            <span className="relative h-48 overflow-hidden bg-muted sm:h-auto sm:w-2/5">
                <img src={ach.organizationImage || ach.image} alt={ach.organization} className={`absolute inset-0 h-full w-full ${ach.organizationImage ? 'object-contain p-8' : 'object-cover'}`} />
            </span>
        </button>
    );
}
