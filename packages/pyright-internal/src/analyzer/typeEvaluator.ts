        return TypePrinter.printObjectTypeForClass(type, evaluatorOptions.printTypeFlags, getEffectiveReturnType, {});
        return TypePrinter.printFunctionParts(type, flags, getEffectiveReturnType, {});
            preserveStringLiterals: options?.preserveStringLiterals,
