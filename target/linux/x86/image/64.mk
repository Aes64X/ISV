define Device/generic
  DEVICE_TITLE := Generic x86/64
  DEVICE_PACKAGES += kmod-mlx4-core
  GRUB2_VARIANT := generic
endef
TARGET_DEVICES += generic
