<template>
    <IMedia>
        <template #image>
            <img
                src="../../../assets/images/placeholder-100x100.jpg"
                height="80"
                width="80"
                alt="Media Image"
            />
        </template>
        <h3>Media Title</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <IMedia>
            <template #image>
                <img
                    src="../../../assets/images/placeholder-100x100.jpg"
                    height="60"
                    width="60"
                    alt="Media Image"
                />
            </template>
            <h3>Nested Media Title</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </IMedia>
    </IMedia>
</template>
