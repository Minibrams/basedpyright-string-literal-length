    maxLiteralStringLength: number;
            { maxLiteralStringLength: evaluatorOptions.maxLiteralStringLength }
        return TypePrinter.printFunctionParts(type, flags, getEffectiveReturnType, {
            maxLiteralStringLength: evaluatorOptions.maxLiteralStringLength,
        });
        const result = TypePrinter.printType(type, flags, getEffectiveReturnType, {
            importTracker: options?.importTracker,
            maxLiteralStringLength: options?.maxLiteralStringLength ?? evaluatorOptions.maxLiteralStringLength,
        });
