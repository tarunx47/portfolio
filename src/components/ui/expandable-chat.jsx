import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';
import { X, Maximize2, Minimize2 } from 'lucide-react';

const ExpandableChatContext = createContext({
    isOpen: false,
    toggleOpen: () => { },
    isExpanded: false,
    toggleExpanded: () => { },
});

export function ExpandableChat({ children, className, position = 'bottom-right', size = 'lg', icon }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const toggleExpanded = () => setIsExpanded(!isExpanded);

    const positionClasses = {
        'bottom-right': 'bottom-4 right-3 sm:bottom-6 sm:right-6',
        'bottom-left': 'bottom-4 left-3 sm:bottom-6 sm:left-6',
        'top-right': 'top-4 right-3 sm:top-6 sm:right-6',
        'top-left': 'top-4 left-3 sm:top-6 sm:left-6',
    };

    const sizeClasses = {
        sm: 'w-[calc(100vw-1.5rem)] sm:w-80 h-[400px] max-h-[80vh]',
        md: 'w-[calc(100vw-1.5rem)] sm:w-96 h-[480px] max-h-[85vh]',
        lg: 'w-[calc(100vw-1.5rem)] sm:w-[380px] md:w-[400px] h-[520px] max-h-[85vh]',
    };

    return (
        <ExpandableChatContext.Provider value={{ isOpen, toggleOpen, isExpanded, toggleExpanded }}>
            <div className={cn('fixed z-50', positionClasses[position])}>
                {!isOpen && (
                    <button
                        onClick={toggleOpen}
                        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
                        aria-label="Open chat"
                    >
                        {icon}
                    </button>
                )}
                {isOpen && (
                    <div
                        className={cn(
                            'bg-background border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all',
                            isExpanded ? 'w-[calc(100vw-1.5rem)] sm:w-[90vw] md:w-[600px] h-[85vh]' : sizeClasses[size],
                            className
                        )}
                    >
                        {children}
                    </div>
                )}
            </div>
        </ExpandableChatContext.Provider>
    );
}

export function ExpandableChatHeader({ children }) {
    const { toggleOpen, isExpanded, toggleExpanded } = useContext(ExpandableChatContext);

    return (
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
            <div className="flex-1">{children}</div>
            <div className="flex items-center gap-2">
                <button
                    onClick={toggleExpanded}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={isExpanded ? 'Minimize' : 'Maximize'}
                >
                    {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button
                    onClick={toggleOpen}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close chat"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

export function ExpandableChatBody({ children }) {
    return <div className="flex-1 overflow-hidden">{children}</div>;
}

export function ExpandableChatFooter({ children }) {
    return <div className="p-4 border-t border-border bg-muted/50">{children}</div>;
}
