FROM gitpod/workspace-full

USER gitpod

RUN sudo apt update && \
    sudo apt install -y git-all && \
    curl https://install.meteor.com/ | sh

ENV PATH=$PATH:$HOME/.meteor
