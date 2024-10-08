const { alpha, getColors } = require("./colors");

function getTheme({ theme, name }) {
    const color = getColors(theme);
    return {
        name: name,
        colors: {
            focusBorder: color.hidden,
            foreground: color.foreground,
            contrastActiveBorder: color.hidden,
            contrastBorder: color.hidden,
            disabledForeground: color.disabled,
            "widget.shadow": color.hidden,
            "widget.border": color.border,
            "selection.background": color.selection,
            descriptionForeground: color.foreground,
            errorForeground: color.red,
            "icon.foreground": color.foreground,

            "window.activeBorder": color.hidden,
            "window.inactiveBorder": color.hidden,

            "textBlockQuote.background": color.button,
            "textBlockQuote.border": color.hidden,
            "textCodeBlock.background": color.button,
            "textPreformat.foreground": color.foreground,
            "textPreformat.background": color.button,
            "textSeparator.foreground": color.foreground,
            "textLink.foreground": color.blue,
            "textLink.activeForeground": color.blue,

            "button.background": color.button,
            "button.foreground": color.foreground,
            "button.border": color.hidden,
            "button.separator": color.disabled,
            "button.hoverBackground": color.hover,
            "button.secondaryForeground": color.foreground,
            "button.secondaryBackground": color.button,
            "button.secondaryHoverBackground": color.hover,

            "checkbox.background": color.input,
            "checkbox.foreground": color.foreground,
            "checkbox.border": color.hidden,

            "dropdown.background": color.button,
            "dropdown.foreground": color.foreground,
            "dropdown.border": color.hidden,
            "dropdown.listBackground": color.button,

            "input.background": color.input,
            "input.border": color.hidden,
            "input.foreground": color.foreground,
            "input.placeholderForeground": color.muted,
            "inputOption.activeBackground": color.selection,
            "inputOption.activeBorder": color.hidden,
            "inputOption.activeForeground": color.foreground,

            "scrollbar.shadow": color.hidden,
            "scrollbarSlider.background": alpha(color.foreground, 0.15),
            "scrollbarSlider.hoverBackground": alpha(color.foreground, 0.4),
            "scrollbarSlider.activeBackground": alpha(color.foreground, 0.4),

            "badge.background": color.background,
            "badge.foreground": color.foreground,

            "progressBar.background": color.muted,

            "list.activeSelectionBackground": color.button,
            "list.activeSelectionForeground": color.foreground,
            "list.inactiveSelectionBackground": color.button,
            "list.inactiveSelectionForeground": color.foreground,
            "list.hoverBackground": color.button,
            "list.hoverForeground": color.foreground,
            "tree.indentGuidesStroke": color.border,
            "list.dropBackground": color.hover,
            "list.highlightForeground": color.foreground,
            "list.focusBackground": color.button,
            "list.focusForeground": color.foreground,
            "list.activeSelectionIconForeground": color.foreground,
            "list.focusHighlightForeground": color.foreground,
            "list.focusOutline": color.hidden,
            "list.focusAndSelectionOutline": color.hidden,
            "list.inactiveSelectionIconForeground": color.foreground,
            "list.inactiveFocusBackground": color.button,
            "list.inactiveFocusOutline": color.hidden,
            "list.invalidItemForeground": color.red,
            "list.errorForeground": color.red,
            "list.warningForeground": color.yellow,
            "listFilterWidget.shadow": color.hidden,
            "list.filterMatchBackground": color.background,
            "list.filterMatchBorder": color.hidden,
            "list.deemphasizedForeground": color.muted,
            "listFilterWidget.background": color.button,
            "listFilterWidget.outline": color.hidden,
            "listFilterWidget.noMatchesOutline": color.red,

            "activityBar.foreground": color.foreground,
            "activityBar.background": color.background,
            "activityBar.inactiveForeground": color.comment,
            "activityBarBadge.foreground": color.foreground,
            "activityBarBadge.background": color.background,
            "activityBar.border": color.hidden,
            "activityBar.activeBackground": color.hidden,

            "sideBar.background": color.background,
            "sideBar.foreground": color.foreground,
            "sideBar.border": color.border,
            "sideBar.dropBackground": color.hover,
            "sideBarSectionHeader.background": color.hidden,
            "sideBarSectionHeader.foreground": color.foreground,
            "sideBarSectionHeader.border": color.hidden,
            "sideBarTitle.foreground": color.foreground,

            "minimapGutter.addedBackground": color.green,
            "minimapGutter.modifiedBackground": color.blue,
            "minimapGutter.deletedBackground": color.red,
            "minimap.findMatchHighlight": color.match,
            "minimap.selectionHighlight": color.selection,
            "minimap.errorHighlight": color.red,
            "minimap.warningHighlight": color.yellow,
            "minimap.background": color.background,
            "minimap.selectionOccurrenceHighlight": color.match,
            "minimap.foregroundOpacity": alpha(color.background, 0.8),
            "minimap.infoHighlight": color.blue,
            "minimapSlider.background": alpha(color.foreground, 0.15),
            "minimapSlider.hoverBackground": alpha(color.foreground, 0.4),
            "minimapSlider.activeBackground": alpha(color.foreground, 0.4),

            "editorGroup.border": color.border,
            "editorGroup.emptyBackground": color.background,
            "editorGroupHeader.border": color.hidden,
            "editorGroupHeader.tabsBackground": color.background,
            "editorGroupHeader.tabsBorder": color.hidden,

            "tab.activeForeground": color.foreground,
            "tab.border": color.hidden,
            "tab.activeBackground": color.background,
            "tab.activeBorder": color.hidden,
            "tab.activeBorderTop": color.muted,
            "tab.inactiveBackground": color.background,
            "tab.inactiveForeground": color.muted,
            "tab.hoverBackground": color.background,
            "tab.hoverForeground": color.muted,
            "tab.hoverBorder": color.hidden,

            "tab.unfocusedActiveBackground": color.background,
            "tab.selectedBorderTop": color.green,
            "tab.selectedBackground": color.background,
            "tab.selectedForeground": color.muted,
            "tab.dragAndDropBorder": color.hidden,
            "tab.unfocusedActiveBorder": color.hidden,
            "tab.unfocusedActiveBorderTop": color.disabled,
            "tab.lastPinnedBorder": color.hidden,
            "tab.unfocusedInactiveBackground": color.background,
            "tab.unfocusedActiveForeground": color.foreground,
            "tab.unfocusedInactiveForeground": color.muted,
            "tab.unfocusedHoverBackground": color.background,
            "tab.unfocusedHoverForeground": color.muted,
            "tab.unfocusedHoverBorder": color.hidden,
            "tab.activeModifiedBorder": color.hidden,
            "tab.inactiveModifiedBorder": color.hidden,
            "tab.unfocusedActiveModifiedBorder": color.hidden,
            "tab.unfocusedInactiveModifiedBorder": color.hidden,

            "editor.background": color.background,
            "editor.foreground": color.foreground,
            "editorLineNumber.activeForeground": color.foreground,
            "editorLineNumber.foreground": color.disabled,
            "editorCursor.background": color.background,
            "editorCursor.foreground": color.foreground,

            "editor.selectionBackground": color.selection,
            "editor.selectionHighlightBackground": alpha(color.foreground, 0.25),
            "editor.selectionHighlightBorder": color.hidden,
            "editor.wordHighlightBackground": color.hidden,
            "editor.wordHighlightBorder": color.hidden,
            "editor.wordHighlightStrongBackground": color.hidden,
            "editor.wordHighlightStrongBorder": color.hidden,

            "editor.findMatchForeground": color.foreground,
            "editor.findMatchBackground": alpha(color.match, 0.8),
            "editor.findMatchHighlightForeground": color.foreground,
            "editor.findMatchHighlightBackground": alpha(color.match, 0.3),
            "editor.findMatchHighlightBorder": color.hidden,
            "editor.findMatchBorder": color.hidden,
            "editor.findRangeHighlightBackground": color.selection,
            "editor.findRangeHighlightBorder": color.hidden,
            "editor.hoverHighlightBackground": color.selection,
            "editor.lineHighlightBackground": color.hidden,
            "editor.lineHighlightBorder": color.hidden,
            "editor.rangeHighlightBackground": color.hidden,
            "editor.rangeHighlightBorder": color.hidden,
            "editorLink.activeForeground": color.blue,
            "editorWhitespace.foreground": alpha(color.foreground, 0.15),

            "editorIndentGuide.activeBackground": alpha(color.foreground, 0.35),
            "editorIndentGuide.activeBackground1": alpha(color.foreground, 0.35),
            "editorIndentGuide.activeBackground2": alpha(color.foreground, 0.35),
            "editorIndentGuide.activeBackground3": alpha(color.foreground, 0.35),
            "editorIndentGuide.activeBackground4": alpha(color.foreground, 0.35),
            "editorIndentGuide.activeBackground5": alpha(color.foreground, 0.35),
            "editorIndentGuide.activeBackground6": alpha(color.foreground, 0.35),
            "editorIndentGuide.background1": alpha(color.foreground, 0.2),
            "editorIndentGuide.background2": alpha(color.foreground, 0.2),
            "editorIndentGuide.background3": alpha(color.foreground, 0.2),
            "editorIndentGuide.background4": alpha(color.foreground, 0.2),
            "editorIndentGuide.background5": alpha(color.foreground, 0.2),
            "editorIndentGuide.background6": alpha(color.foreground, 0.2),
            "editorIndentGuide.background": alpha(color.foreground, 0.2),

            "editorRuler.foreground": color.hover,
            "editorCodeLens.foreground": color.muted,
            "editorBracketMatch.background": color.hidden,
            "editorBracketMatch.border": color.hidden,
            "editorBracketHighlight.foreground1": color.foreground,
            "editorBracketHighlight.foreground2": color.foreground,
            "editorBracketHighlight.foreground3": color.foreground,
            "editorBracketHighlight.foreground4": color.foreground,
            "editorBracketHighlight.foreground5": color.foreground,
            "editorBracketHighlight.foreground6": color.foreground,
            "editorBracketHighlight.unexpectedBracket.foreground": color.red,

            "editor.foldBackground": alpha(color.hover, 0.75),

            "editorOverviewRuler.background": color.background,
            "editorOverviewRuler.border": color.background,

            "editorError.background": color.hidden,
            "editorError.border": color.hidden,
            "editorError.foreground": color.red,
            "editorInfo.background": color.hidden,
            "editorInfo.border": color.hidden,
            "editorInfo.foreground": color.blue,
            "editorWarning.background": color.hidden,
            "editorWarning.border": color.hidden,
            "editorWarning.foreground": color.yellow,

            "editorGutter.addedBackground": color.green,
            "editorGutter.background": color.hidden,
            "editorGutter.commentRangeForeground": color.comment,
            "editorGutter.deletedBackground": color.red,
            "editorGutter.foldingControlForeground": color.comment,
            "editorGutter.modifiedBackground": color.blue,

            "diffEditor.insertedTextBackground": alpha(color.green, 0.25),
            "diffEditor.removedTextBackground": alpha(color.red, 0.25),
            "diffEditor.insertedLineBackground": alpha(color.green, 0.25),
            "diffEditor.removedLineBackground": alpha(color.red, 0.25),
            "diffEditor.border": color.border,
            "diffEditor.insertedTextBorder": color.hidden,
            "diffEditor.removedTextBorder": color.hidden,
            "diffEditor.unchangedRegionBackground": color.hidden,
            "diffEditor.unchangedRegionForeground": color.hidden,
            "diffEditor.unchangedRegionShadow": color.hidden,
            "diffEditor.unchangedCodeBackground": color.hidden,
            "diffEditor.diagonalFill": color.hover,
            "diffEditorGutter.insertedLineBackground": color.hidden,
            "diffEditorGutter.removedLineBackground": color.hidden,
            "diffEditorOverview.insertedForeground": alpha(color.green, 0.35),
            "diffEditorOverview.removedForeground": alpha(color.red, 0.35),
            "diffEditor.move.border": color.border,
            "diffEditor.moveActive.border": color.border,

            "editorWidget.foreground": color.foreground,
            "editorWidget.background": color.background,
            "editorWidget.border": color.hidden,
            "editorWidget.resizeBorder": color.border,

            "editorSuggestWidget.background": color.background,
            "editorSuggestWidget.border": color.hidden,
            "editorSuggestWidget.foreground": color.foreground,
            "editorSuggestWidget.highlightForeground": color.foreground,
            "editorSuggestWidget.selectedBackground": color.hover,
            "editorSuggestWidget.selectedForeground": color.foreground,
            "editorSuggestWidget.selectedIconForeground": color.foreground,
            "editorSuggestWidgetStatus.foreground": color.foreground,

            "editorHoverWidget.foreground": color.foreground,
            "editorHoverWidget.background": color.background,
            "editorHoverWidget.border": color.hidden,

            "debugExceptionWidget.background": color.background,
            "debugExceptionWidget.border": color.hidden,

            "editorMarkerNavigation.background": color.background,
            "editorMarkerNavigationError.background": color.red,
            "editorMarkerNavigationWarning.background": color.yellow,
            "editorMarkerNavigationInfo.background": color.blue,

            "peekView.border": color.border,
            "peekViewEditor.background": color.background,
            "peekViewEditorGutter.background": color.background,
            "peekViewEditor.matchHighlightBackground": color.match,
            "peekViewEditor.matchHighlightBorder": color.hidden,
            "peekViewResult.background": color.background,
            "peekViewResult.fileForeground": color.foreground,
            "peekViewResult.lineForeground": color.foreground,
            "peekViewResult.matchHighlightBackground": color.match,
            "peekViewResult.selectionBackground": color.selection,
            "peekViewResult.selectionForeground": color.foreground,
            "peekViewTitle.background": color.background,
            "peekViewTitleDescription.foreground": color.foreground,
            "peekViewTitleLabel.foreground": color.foreground,

            "merge.currentHeaderBackground": alpha(color.green, 0.8),
            "merge.currentContentBackground": alpha(color.green, 0.6),
            "merge.incomingHeaderBackground": alpha(color.blue, 0.8),
            "merge.incomingContentBackground": alpha(color.blue, 0.6),
            "merge.commonHeaderBackground": alpha(color.comment, 0.8),
            "merge.commonContentBackground": alpha(color.comment, 0.6),

            "panel.background": color.background,
            "panel.border": color.border,
            "panelSection.border": color.border,
            "panelTitle.activeBorder": color.foreground,
            "panelTitle.activeForeground": color.foreground,
            "panelTitle.inactiveForeground": color.comment,
            "panelInput.border": color.hidden,

            "statusBar.foreground": color.foreground,
            "statusBar.background": color.background,
            "statusBar.border": color.hidden,
            "statusBar.focusBorder": color.hidden,
            "statusBar.debuggingBackground": color.background,
            "statusBar.debuggingForeground": color.foreground,
            "statusBar.debuggingBorder": color.hidden,
            "statusBar.noFolderBackground": color.background,
            "statusBar.noFolderForeground": color.background,
            "statusBar.noFolderBorder": color.hidden,
            "statusBarItem.focusBorder": color.hidden,
            "statusBarItem.hoverBackground": color.hover,
            "statusBarItem.remoteBackground": color.selection,
            "statusBarItem.remoteForeground": color.foreground,
            "statusBarItem.activeBackground": color.background,
            "statusBarItem.prominentBackground": color.yellow,

            "titleBar.activeBackground": color.background,
            "titleBar.activeForeground": color.foreground,
            "titleBar.inactiveBackground": color.background,
            "titleBar.inactiveForeground": color.comment,
            "titleBar.border": color.hidden,

            "notifications.foreground": color.foreground,
            "notifications.background": color.background,
            "notificationToast.border": color.background,
            "notificationsErrorIcon.foreground": color.red,
            "notificationsWarningIcon.foreground": color.yellow,
            "notificationsInfoIcon.foreground": color.blue,
            "notificationCenter.border": color.border,
            "notificationCenterHeader.foreground": color.foreground,
            "notificationCenterHeader.background": color.background,
            "notifications.border": color.border,

            "pickerGroup.border": color.border,
            "pickerGroup.foreground": color.foreground,
            "quickInput.background": color.background,
            "quickInput.foreground": color.foreground,
            "quickInputList.focusBackground": color.input,
            "quickInputList.focusForeground": color.foreground,
            "quickInputList.focusIconForeground": color.foreground,
            "quickInputTitle.background": color.background,

            "terminal.foreground": color.foreground,
            "terminal.background": color.background,
            "terminal.selectionBackground": color.selection,
            "terminal.border": color.border,
            "terminal.ansiBlack": color.background,
            "terminal.ansiBlue": color.blue,
            "terminal.ansiBrightBlack": color.comment,
            "terminal.ansiBrightBlue": color.blue,
            "terminal.ansiBrightCyan": color.cyan,
            "terminal.ansiBrightGreen": color.green,
            "terminal.ansiBrightMagenta": color.magenta,
            "terminal.ansiBrightRed": color.red,
            "terminal.ansiBrightWhite": color.foreground,
            "terminal.ansiBrightYellow": color.yellow,
            "terminal.ansiCyan": color.cyan,
            "terminal.ansiGreen": color.green,
            "terminal.ansiMagenta": color.magenta,
            "terminal.ansiRed": color.red,
            "terminal.ansiWhite": color.foreground,
            "terminal.ansiYellow": color.yellow,

            "debugToolBar.background": color.background,
            "debugToolBar.border": color.hidden,

            "gitDecoration.addedResourceForeground": color.green,
            "gitDecoration.conflictingResourceForeground": color.magenta,
            "gitDecoration.deletedResourceForeground": color.red,
            "gitDecoration.ignoredResourceForeground": color.comment,
            "gitDecoration.modifiedResourceForeground": color.yellow,
            "gitDecoration.renamedResourceForeground": color.yellow,
            "gitDecoration.stageDeletedResourceForeground": color.red,
            "gitDecoration.stageModifiedResourceForeground": color.yellow,
            "gitDecoration.submoduleResourceForeground": color.blue,
            "gitDecoration.untrackedResourceForeground": color.green,
            
            // TODO: These colors are still messy, fix once upstream fixes these keys.
            "scmGraph.historyItemHoverLabelForeground": color.foreground,
            "scmGraph.foreground1": color.magenta,
            "scmGraph.foreground2": color.green,
            "scmGraph.foreground3": color.blue,
            "scmGraph.foreground4": color.yellow,
            "scmGraph.foreground5": color.red,
            "scmGraph.historyItemHoverAdditionsForeground": color.green,
            "scmGraph.historyItemHoverDeletionsForeground": color.red,
            "scmGraph.historyItemRefColor": color.red,
            "scmGraph.historyItemRemoteRefColor": color.blue,
            "scmGraph.historyItemBaseRefColor": color.green,
            "scmGraph.historyItemHoverDefaultLabelForeground": color.foreground,
            "scmGraph.historyItemHoverDefaultLabelBackground": color.button,

            "breadcrumb.background": color.background,
            "breadcrumb.foreground": color.muted,
            "breadcrumb.focusForeground": color.foreground,
            "breadcrumb.activeSelectionForeground": color.foreground,
            "breadcrumbPicker.background": color.background,

            "editor.snippetTabstopHighlightBackground": color.hidden,
            "editor.snippetTabstopHighlightBorder": color.hidden,
            "editor.snippetFinalTabstopHighlightBackground": color.hidden,
            "editor.snippetFinalTabstopHighlightBorder": color.foreground,

            "symbolIcon.arrayForeground": color.foreground,
            "symbolIcon.booleanForeground": color.foreground,
            "symbolIcon.classForeground": color.foreground,
            "symbolIcon.colorForeground": color.foreground,
            "symbolIcon.constantForeground": color.foreground,
            "symbolIcon.constructorForeground": color.foreground,
            "symbolIcon.enumeratorForeground": color.foreground,
            "symbolIcon.enumeratorMemberForeground": color.foreground,
            "symbolIcon.eventForeground": color.foreground,
            "symbolIcon.fieldForeground": color.foreground,
            "symbolIcon.fileForeground": color.foreground,
            "symbolIcon.folderForeground": color.foreground,
            "symbolIcon.functionForeground": color.foreground,
            "symbolIcon.interfaceForeground": color.foreground,
            "symbolIcon.keyForeground": color.foreground,
            "symbolIcon.keywordForeground": color.foreground,
            "symbolIcon.methodForeground": color.foreground,
            "symbolIcon.moduleForeground": color.foreground,
            "symbolIcon.namespaceForeground": color.foreground,
            "symbolIcon.nullForeground": color.foreground,
            "symbolIcon.numberForeground": color.foreground,
            "symbolIcon.objectForeground": color.foreground,
            "symbolIcon.operatorForeground": color.foreground,
            "symbolIcon.packageForeground": color.foreground,
            "symbolIcon.propertyForeground": color.foreground,
            "symbolIcon.referenceForeground": color.foreground,
            "symbolIcon.snippetForeground": color.foreground,
            "symbolIcon.stringForeground": color.foreground,
            "symbolIcon.structForeground": color.foreground,
            "symbolIcon.textForeground": color.foreground,
            "symbolIcon.typeParameterForeground": color.foreground,
            "symbolIcon.unitForeground": color.foreground,
            "symbolIcon.variableForeground": color.foreground,

            "debugIcon.breakpointForeground": color.red,
            "debugIcon.breakpointDisabledForeground": color.comment,
            "debugIcon.breakpointUnverifiedForeground": color.yellow,
            "debugIcon.breakpointCurrentStackframeForeground": color.red,
            "debugIcon.breakpointStackframeForeground": color.red,
            "debugIcon.startForeground": color.green,
            "debugIcon.pauseForeground": color.blue,
            "debugIcon.stopForeground": color.red,
            "debugIcon.disconnectForeground": color.yellow,
            "debugIcon.restartForeground": color.green,
            "debugIcon.stepOverForeground": color.foreground,
            "debugIcon.stepIntoForeground": color.foreground,
            "debugIcon.stepOutForeground": color.foreground,
            "debugIcon.continueForeground": color.green,
            "debugIcon.stepBackForeground": color.foreground,
            "debugConsole.infoForeground": color.blue,
            "debugConsole.warningForeground": color.yellow,
            "debugConsole.errorForeground": color.red,
            "debugConsole.sourceForeground": color.foreground,
            "debugConsoleInputIcon.foreground": color.foreground,

            "notebook.editorBackground": color.background,
            "notebook.cellBorderColor": color.hidden,
            "notebook.cellHoverBackground": color.hidden,
            "notebook.cellInsertionIndicator": color.blue,
            "notebook.cellStatusBarItemHoverBackground": color.hover,
            "notebook.cellToolbarSeparator": color.hidden,
            "notebook.cellEditorBackground": color.input,
            "notebook.focusedCellBackground": color.background,
            "notebook.focusedCellBorder": color.muted,
            "notebook.focusedEditorBorder": color.hover,
            "notebook.inactiveFocusedCellBorder": color.hidden,
            "notebook.inactiveSelectedCellBorder": color.hidden,
            "notebook.outputContainerBackgroundColor": color.background,
            "notebook.outputContainerBorderColor": color.hidden,
            "notebook.selectedCellBackground": color.hover,
            "notebook.selectedCellBorder": color.green,
            "notebook.symbolHighlightBackground": color.magenta,
            "notebookScrollbarSlider.activeBackground": alpha(color.foreground, 0.4),
            "notebookScrollbarSlider.background": alpha(color.foreground, 0.15),
            "notebookScrollbarSlider.hoverBackground": alpha(color.foreground, 0.4),
            "notebookStatusErrorIcon.foreground": color.red,
            "notebookStatusSuccessIcon.foreground": color.green,
            "notebookStatusRunningIcon.foreground": color.blue,
            "notebookEditorOverviewRuler.runningCellForeground": color.comment,

            "charts.foreground": color.foreground,
            "charts.lines": color.foreground,
            "charts.red": color.red,
            "charts.blue": color.blue,
            "charts.yellow": color.yellow,
            "charts.orange": color.cyan,
            "charts.green": color.green,
            "charts.purple": color.magenta,
        },
        semanticHighlighting: true,
        // TODO: Finish these
        semanticTokenColors: {
            enumMember: {
                foreground: color.foreground,
            },
            "variable.constant": {
                foreground: color.foreground,
            },
            "variable.defaultLibrary": {
                foreground: color.foreground,
            },
        },
        tokenColors: [
            {
                name: "Headings",
                scope: "header, markup.heading",
                settings: {
                    fontStyle: "bold",
                    foreground: color.foreground,
                },
            },
            {
                name: "Links",
                scope: "underline, markup.underline.link",
                settings: {
                    fontStyle: "underline",
                    foreground: color.foreground,
                },
            },
            {
                name: "Quotes",
                scope: "markup.quote",
                settings: {
                    fontStyle: "italic",
                    foreground: color.foreground,
                },
            },
            {
                // TODO: Not working
                name: "TODOs",
                scope: "todo",
                settings: {
                    fontStyle: "italic",
                    foreground: color.yellow,
                },
            },
            {
                name: "Errors",
                scope: "log.error",
                settings: {
                    fontStyle: "bold",
                    foreground: color.red,
                },
            },
            {
                name: "Warnings",
                scope: "log.warning",
                settings: {
                    fontStyle: "bold",
                    foreground: color.yellow,
                },
            },
            {
                name: "Comments",
                scope: "comment, punctuation.definition.comment, unused.comment, wildcard.comment",
                settings: {
                    fontStyle: "italic",
                    foreground: color.comment,
                },
            },
            {
                name: "Docstrings",
                scope: "string.quoted.docstring.multi",
                settings: {
                    foreground: color.comment,
                },
            },
            {
                // TODO: Not working
                name: "Docstring Keywords",
                scope: "comment.block.documentation keyword",
                settings: {
                    foreground: color.comment,
                },
            },
            {
                name: "Strings",
                scope: "string",
                settings: {
                    foreground: color.foreground,
                },
            },
        ],
    };
}

module.exports = getTheme;