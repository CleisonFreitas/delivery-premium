"use client";
import { TemplateHeader } from './template-header';
import { TemplateMain } from './template-main';
import { TemplateFooter } from './template-footer';

export const LayoutFile = () => {
    return (
        <section className="grid grid-rows-[120px_2800px_500px] grid-cols-[100dvw] justify-center">
            <TemplateHeader />
            <TemplateMain />
        </section>
    );
}