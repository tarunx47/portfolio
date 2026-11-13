import { PageHeader } from "../components/common/PageHeader.jsx";

export const ChineseLearningPage = () => (
    <section className="relative w-full overflow-hidden py-16 font-light" id="chinese-learning">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <PageHeader val="06." subheading="Beyond Code" mainHeading="Chinese Learning Journey" />
            <p className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
                Currently preparing this space for my Mandarin learning journey. Progress, notes, and discoveries will be added here as I learn.
            </p>
        </div>
    </section>
);
