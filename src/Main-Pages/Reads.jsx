import { PageHeader } from "../components/common/PageHeader.jsx";
import ReadCard from "../components/ReadCard.jsx";
import { NOVELS } from "@/data/readingArchive.js";

export const ReadsPage = () => (
    <section className="relative w-full overflow-hidden py-16 font-light" id="reads">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <PageHeader val="05." subheading="Reading" mainHeading="Archive" />
            {NOVELS.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {NOVELS.map((novel) => <ReadCard key={novel.id} novel={novel} />)}
                </div>
            ) : (
                <p className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
                    My reading archive is coming soon.
                </p>
            )}
        </div>
    </section>
);
