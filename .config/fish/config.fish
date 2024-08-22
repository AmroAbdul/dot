## Set values
# Hide welcome message & ensure we are reporting fish as shell
set fish_greeting
set VIRTUAL_ENV_DISABLE_PROMPT "1"
#set -x MANPAGER "sh -c 'col -bx | bat -l man -p'"
set -x SHELL /usr/bin/fish
# Tokyo night colors for fzf 
# https://t.ly/L30wZ
set -x FZF_DEFAULT_OPTS "--color=fg:#c8d3f5,bg:#222436,hl:#ff966c 
--color=fg+:#c8d3f5,bg+:#2f334d,hl+:#ff966c 
--color=info:#82aaff,prompt:#86e1fc,pointer:#86e1fc 
--color=marker:#c3e88d,spinner:#c3e88d,header:#c3e88d"
## Export variable need for qt-theme
if type "qtile" >> /dev/null 2>&1
   set -x QT_QPA_PLATFORMTHEME "qt5ct"
end

# Set settings for https://github.com/franciscolourenco/done
set -U __done_min_cmd_duration 10000
set -U __done_notification_urgency_level low


## Environment setup
# Apply .profile: use this to put fish compatible .profile stuff in
if test -f ~/.fish_profile
  source ~/.fish_profile
end

# Add ~/.local/bin to PATH
if test -d ~/.local/bin
    if not contains -- ~/.local/bin $PATH
        set -p PATH ~/.local/bin
    end
end

# Add depot_tools to PATH
if test -d ~/Applications/depot_tools
    if not contains -- ~/Applications/depot_tools $PATH
        set -p PATH ~/Applications/depot_tools
    end
end


## Starship prompt
if status --is-interactive
   source ("/usr/bin/starship" init fish --print-full-init | psub)
end


function cursor
  $HOME/Appimage/cursor.AppImage
end


function function_depends  
    set search (echo "$argv")
    sudo pacman -Sii $search | grep "Required" | sed -e "s/Required By     : //g" | sed -e "s/  /\n/g"
end 

alias depends='function_depends'


### EXPORT ###
set TERM "xterm-256color"                         # Sets the terminal type
set EDITOR "nvim"                 # EDITOR use Emacs in terminal
set VISUAL "emacsclient -c -a emacs"              # $VISUAL use Emacs in GUI mode
set ARNAME "عمرو عبد الواحد"
set ENNAME "AMRO ABD ALWAHED"
set TRNAME "AMRO ABDULVAHİT"
# set ADDRESS ""
set GITHUBURL "https://github.com/AmroAbdul"
set GITHUBUNAME "AmroAbdul"
set GITLABURL "https://gitlab.com"
set GITHUB "https://github.com"
set CONFIGDIR "$HOME/.config"
set os (uname)
set TEMP "$HOME/Downloads/TEMP/"
set PHONE "+905072602232"
set POSTALCODE "34762"
set ICONLOCALDIR "$HOME/.local/share/icons/"
set ICONROOTDIR "/usr/share/icons/"
set FONTLOCALDIR "$HOME/.local/share/fonts"
set FONTDIR "/usr/share/fonts"
set DOOMDIR "$HOME/.config/doom/"
set EMACSDIR "$HOME/.config/emacs/"
set BROWSER "brave"
set BROWSERALT "firefox"
# set EXT "/Ext"
set DOWNLOADS "$HOME/Downloads"
set DOCUMENTS "$HOME/Documents"
set DOT "$HOME/.config"
set PICTURES "$HOME/Pictures"
set DOCUMENTS "$HOME/Documents"
set VIDEOS "$HOME/Videos"

##### FUNCTIONS
function plz
    eval sudo $history[1]
end
function fish_start_message
    set LC_TIME ar_SY.UTF-8 && echo "اليوم هو: $(date +%A) "
    #set ds (string upper $desktop_session)
    #echo Saat: (set_color purple; date +%r; set_color normal) #\& current de/wm is: $ds
    ical --dual | lolcat
    #if test -e .bashrc
    #    echo your location is (set_color yellow; ipgeo -f longitude latitude --horizontal;set_color normal)        
    #end
end


# function fish_greeting
# echo  "
#                                                                  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⠀⠀⠀⠀⣀⣠⣤⣶⣞⡛⠿⠭⣷⡦⢬⣟⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⠀⠀⢠⡾⣯⡙⠳⣍⠳⢍⡙⠲⠤⣍⠓⠦⣝⣮⣉⠻⣿⡄⠀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⠀⠀⡿⢿⣷⣯⣷⣮⣿⣶⣽⠷⠶⠬⠿⠷⠟⠻⠟⠳⠿⢷⡀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⠀⣸⣁⣀⣈⣛⣷⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀
#                                                                ⠀⣸⣯⣁⣤⣤⣀⠈⢧⠘⣆⢀⣠⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀
#                                                                ⠀⢙⡟⡛⣿⣿⣿⢷⡾⠀⢿⣿⣏⣳⣾⡆⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀
#                                                                ⢀⡞⠸⠀⠉⠉⠁⠀⠀⣠⣼⣿⣿⠀⣽⡇⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀
#                                                                ⣼⡀⣀⡐⢦⢀⣀⠀⣴⣿⣿⡏⢿⣶⣟⣀⣀⣀⣀⣀⣤⣤⠞⠁⠀⠀⠀⠀⠀⠀
#                                                                ⠀⣿⣿⣿⣿⣾⣿⣿⣿⣾⡻⠷⣝⣿⡌⠉⠉⠁⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⠈⢻⣿⣿⣿⣿⡟⣿⣟⠻⣿⡿⢿⡇⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⢠⣿⢿⣼⣿⣿⠿⣏⣹⡃⢹⣯⡿⠀⠀⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀
#                                                                ⠀⣽⣿⣿⢿⠹⣿⣇⠿⣾⣷⣼⠟⠁⠀⠀⠀⢀⣠⣴⣶⣾⣷⣶⣄⡀⠀⠀⠀⠀
#                                                                ⠀⢿⣾⡟⢺⣧⣏⣿⡷⢻⠅⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀
#                                                                ⠀⠀⠙⠛⠓⠛⠋⣡⣿⣬⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠛
#                                                                ⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠉⠁⠀⠀⠀⠀⠀⠀
#                                                                ⠀⠀⠀⠀⠀⠀⠸⡿⠿⠿⠿⠿⠿⠿⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
# "
# end

# Spark functions
function letters
    cat $argv | awk -vFS='' '{for(i=1;i<=NF;i++){ if($i~/[a-zA-Z]/) { w[tolower($i)]++} } }END{for(i in w) print i,w[i]}' | sort | cut -c 3- | spark | lolcat
    printf  '%s\n' 'abcdefghijklmnopqrstuvwxyz'  ' ' | lolcat
end

function commits
    git log --author="$argv" --format=format:%ad --date=short | uniq -c | awk '{print $1}' | spark | lolcat
end

############ALIAS###########
## essential

alias SOURCE "source $HOME/.config/fish/config.fish"
alias cls 'clear;ls'
alias myip "curl icanhazip.com"
alias earthquakeSpark "curl -s https://api.orhanaydogdu.com.tr/deprem/kandilli/live | jq '.result[].mag' | spark | lolcat"
alias fastping="ping -c 100  -i .2 "
alias rm='rm -I --preserve-root'
alias s 'sudo'
alias sudo 'sudo '
alias v 'vim'
alias m 'man'
alias cpdir 'cp -r '
alias vi "nvim"
alias chmox "chmod +x "
alias .CONFIG 'cd ~/.config'
alias wget 'wget -c'
alias open="xdg-open"
alias tree='eza --long --tree '
alias x 'exit'
alias clear='echo -en "\x1b[2J\x1b[1;1H" ; echo; echo; seq 1 (tput cols) | sort -R | spark | lolcat -a; echo; echo'
alias ls 'eza --icons -1 -a'
alias lsdir 'eza --icons -1 --only-dirs'
alias lsa 'eza --icons -1 -l -a '
alias lsdira 'eza --icons --only-dirs --all '
alias cat 'bat '
alias icat 'kitty +kitten icat '
alias kitty-themes 'kitty +kitten themes'
alias vim 'nvim'
alias c 'clear'
alias h 'history'
alias reboot 'sudo /sbin/reboot'
alias poweroff 'sudo /sbin/poweroff'
alias shutdown 'sudo /sbin/shutdown'
alias ports 'netstat -tulanp | fzf'


## عربي
alias نسخ "cp"
alias قص "mv"
alias حذف "rm"
alias اطبع "echo"
alias فيم "vim"
alias مسح "clear"
alias تاريخ "history"

##apis

alias sun_rise_set "curl -s 'https://api.sunrise-sunset.org/json?lat=41.0091982lng=28.9662187' | jq '.'"
alias holidays "curl -s https://date.nager.at/api/v3/PublicHolidays/(date +%Y)/TR | jq '.' "

# dev
alias create-react "npx create-react-app "
alias code 'code -r '
alias doom '$HOME/.config/emacs/bin/doom'
alias py 'python'
alias vim 'nvim'
alias b 'bash'
alias gitigonre 'npx add-gitignore'
alias GET 'http GET '
alias HEAD 'http HEAD '
alias PUT 'http PUT '
alias POST 'http POST '
alias code_add 'code --add '
alias sddm-test 'sddm-greeter --test-mode --theme ' 

alias mpvAudio 'mpv --no-video '
alias mpvVideo 'mpv '

alias audio2mp3 'to_mp3'

# audio 
function  to_mp3 --argument -a $in $out
    ffmpeg -i $in -vn -ar 44100 -ac 2 -b:a 192k $out.mp3
end



# MISC
# alias hijri-date "curl -s  http://api.aladhan.com/v1/gToH/(date -u +%d-%m-%Y) | jq -r '.data.hijri.date' | lolcat  -i"
# alias hijri-month "curl -s  http://api.aladhan.com/v1/gToH/(date -u +%d-%m-%Y) | jq -r '.data.hijri.month' | lolcat  -i


#systemd 
alias systemctl 'sudo systemctl '
alias service-enable 'sudo systemctl enable --now '
alias service-status 'systemctl status '
alias service-restart 'sudo systemctl restart --now '
alias service-mask 'sudo systemctl mask '
alias service-start 'sudo systemctl start --now '
alias servie-status 'sudo systemctl status '
alias service-disable 'sudo systemctl disable --now '
alias service-stop 'sudo systemctl stop --now '



## docker
alias start_docker 'sudo systemctl start --now docker'

## yt-dlp
alias yta-aac "yt-dlp --extract-audio --audio-format aac "
alias yta-best "yt-dlp --extract-audio --audio-format best "
alias yta-flac "yt-dlp --extract-audio --audio-format flac "
alias yta-m4a "yt-dlp --extract-audio --audio-format m4a "
alias yta-mp3 "yt-dlp --extract-audio --audio-format mp3 "
alias yta-opus "yt-dlp --extract-audio --audio-format opus "
alias yta-vorbis "yt-dlp --extract-audio --audio-format vorbis "
alias yta-wav "yt-dlp --extract-audio --audio-format wav "
alias ytv-best "yt-dlp -f bestvideo+bestaudio "

## misc
alias aria 'aria2c'
alias totalusage='df -hl --total | grep total'
alias usage='du -ch /home/amro/ | grep total'
alias wifikey="sudo grep -r '^psk=' /etc/NetworkManager/system-connections/"


#package managers
alias install "sudo pacman -S "
alias remove  "sudo pacman -Rns"
alias sync  "sudo pacman -Suyy "
alias search  "paru -Ss"
alias update "sudo pacman -Suy "    
alias pacclean 'sudo pacman -Rns (pacman -Qtdq)'
alias aur "paru"
alias yay "paru"
alias aura "paru"
alias removeflat 'sudo flatpak uninstall '
alias installflat 'sudo flatpak install '


#git
function add_and_commit --argument-names msg 
  git add .
  git commit -m "$msg"
end

alias gaddmit 'add_and_commit'
alias gfetch 'git fetch'
alias gtag 'git tag'
alias gstatus 'git status'
alias greflog 'git reflog'
alias gnewtag 'git tag -a'
alias gbranch 'git branch'
alias gcommit 'git commit -m'
alias gpull 'git pull '
alias gpush 'git push '
alias ginit 'git init'
alias gclone 'git clone'
alias gclone_branch 'git clone-branch'
alias gcheckout 'git checkout '
alias gaddall 'git add .'
alias gadd 'git add'
alias gremote 'git remote'


# bare git repo alias for dotfiles
alias config="/usr/bin/git --git-dir=$HOME/dotfiles --work-tree=$HOME"


# GEOSPATIAL aliases
#TODO


## DATABASES
function renamedb --argument from to
    echo "alter database \"$from\" rename to \"$to\"" | psql -d template1
end
function ensuredb --argument db
    psql -d $db -c "select pg_terminate_backend(pid) from pg_stat_activity where pid <> pg_backend_pid() and datname = '$db'" >/dev/null
    dropdb $db >/dev/null
    createdb $db
end





##add RTL support
printf "\e[?2501h"
printf "\e[2 k"




## Advanced command-not-found hook
source /usr/share/doc/find-the-command/ftc.fish


## Functions
# Functions needed for !! and !$ https://github.com/oh-my-fish/plugin-bang-bang
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

if [ "$fish_key_bindings" = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

# Fish command history
function history
    builtin history --show-time='%F %T '
end

function backup --argument filename
    cp $filename $filename.bak
end

# Copy DIR1 DIR2
function copy
    set count (count $argv | tr -d \n)
    if test "$count" = 2; and test -d "$argv[1]"
	set from (echo $argv[1] | string trim --right --chars=/)
	set to (echo $argv[2])
        command cp -r $from $to
    else
        command cp $argv
    end
end


## Useful aliases

# Replace ls with eza
alias ls 'eza -al --color=always --group-directories-first --icons' # preferred listing
alias la 'eza -a --color=always --group-directories-first --icons'  # all files and dirs
alias ll 'eza -l --color=always --group-directories-first --icons'  # long format
alias lt 'eza -aT --color=always --group-directories-first --icons' # tree listing
alias l. 'eza -ald --color=always --group-directories-first --icons .*' # show only dotfiles

# Replace some more things with better alternatives
alias cat 'bat --style header --style snip --style changes --style header'
if not test -x /usr/bin/yay; and test -x /usr/bin/paru
    alias yay 'paru'
end


# Common use
alias .. 'cd ..'
alias ... 'cd ../..'
alias .... 'cd ../../..'
alias ..... 'cd ../../../..'
alias ...... 'cd ../../../../..'
alias big 'expac -H M "%m\t%n" | sort -h | nl'     # Sort installed packages according to size in MB (expac must be installed)
alias dir 'dir --color=auto'
alias fixpacman 'sudo rm /var/lib/pacman/db.lck'
alias gitpkg 'pacman -Q | grep -i "\-git" | wc -l' # List amount of -git packages
alias grep 'ugrep --color=auto'
alias egrep 'ugrep -E --color=auto'
alias fgrep 'ugrep -F --color=auto'
alias grubup 'sudo update-grub'
alias hw 'hwinfo --short'                          # Hardware Info
alias ip 'ip -color'
alias psmem 'ps auxf | sort -nr -k 4'
alias psmem10 'ps auxf | sort -nr -k 4 | head -10'
alias rmpkg 'sudo pacman -Rdd'
alias tarnow 'tar -acf '
alias untar 'tar -zxvf '
alias upd '/usr/bin/garuda-update'
alias vdir 'vdir --color=auto'
alias wget 'wget -c '

# Get fastest mirrors
alias mirror 'sudo reflector -f 30 -l 30 --number 10 --verbose --save /etc/pacman.d/mirrorlist'
alias mirrora 'sudo reflector --latest 50 --number 20 --sort age --save /etc/pacman.d/mirrorlist'
alias mirrord 'sudo reflector --latest 50 --number 20 --sort delay --save /etc/pacman.d/mirrorlist'
alias mirrors 'sudo reflector --latest 50 --number 20 --sort score --save /etc/pacman.d/mirrorlist'


# Get the error messages from journalctl
alias jctl 'journalctl -p 3 -xb'

# Recent installed packages
alias rip 'expac --timefmt="%Y-%m-%d %T" "%l\t%n %v" | sort | tail -200 | nl'

## Run fastfetch if session is interactive
# if status --is-interactive && type -q fastfetch
#    fastfetch --load-config dr460nized
# end

    # TokyoNight Color Palette
    set -l foreground c8d3f5
    set -l selection 2d3f76
    set -l comment 636da6
    set -l red ff757f
    set -l orange ff966c
    set -l yellow ffc777
    set -l green c3e88d
    set -l purple fca7ea
    set -l cyan 86e1fc
    set -l pink c099ff

    # Syntax Highlighting Colors
    set -g fish_color_normal $foreground
    set -g fish_color_command $cyan
    set -g fish_color_keyword $pink
    set -g fish_color_quote $yellow
    set -g fish_color_redirection $foreground
    set -g fish_color_end $orange
    set -g fish_color_error $red
    set -g fish_color_param $purple
    set -g fish_color_comment $comment
    set -g fish_color_selection --background=$selection
    set -g fish_color_search_match --background=$selection
    set -g fish_color_operator $green
    set -g fish_color_escape $pink
    set -g fish_color_autosuggestion $comment

    # Completion Pager Colors
    set -g fish_pager_color_progress $comment
    set -g fish_pager_color_prefix $cyan
    set -g fish_pager_color_completion $foreground
    set -g fish_pager_color_description $comment
    set -g fish_pager_color_selected_background --background=$selection

  
# opam configuration

zoxide init fish | source
source /home/amro/.opam/opam-init/init.fish > /dev/null 2> /dev/null; or true
alias config='/usr/bin/git --git-dir=/home/amro/.dotbare/ --work-tree=/home/amro'
