 complete -c doom  -a install -d '   Installs and sets up Doom Emacs for the first time.'
 complete -c doom  -a sync -d 'Synchronize your config with Doom Emacs.'
 complete -c doom -a profiles -d 'Commands for maintaining your Doom Emacs configuration.'
 complete -c doom -a  upgrade -d 'Updates Doom and packages'
 complete -c doom -a build -d 'Byte-compiles & symlinks installed packages.'
 complete -c doom -a purge -d 'Deletes orphaned packages & repos, and compacts them.'
 complete -c doom -a clean -d 'Delete all *.elc files.'
 complete -c doom -a env -d '(Re)generates envvars file from your shell environment.'
 complete -c doom -a info --no-files
 complete -c doom -a version --no-files
 complete  -c doom -a help --no-files
 complete  -c doom -a ci  --no-files
 complete  -c doom -a make --no-files
 complete  -c doom -a run -F 
